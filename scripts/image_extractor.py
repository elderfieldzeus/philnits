"""
Improved Image Extractor - Renders PDF pages as high-resolution images
instead of extracting embedded low-res images
"""
import fitz
from pathlib import Path


def extract_images_by_rendering(pdf_path, output_dir, start_page=3, dpi=300):
    """
    Extract images by RENDERING pages as high-resolution images.
    
    This approach is better than extract_image() because:
    - Captures vector graphics (lines, shapes, text diagrams)
    - Higher resolution output
    - Preserves visual layout exactly as seen in PDF
    
    Args:
        pdf_path: Path to PDF file
        output_dir: Directory to save rendered images
        start_page: First page to render (1-indexed, default 3 to skip cover pages)
        dpi: Resolution in dots per inch (default 300 for high quality)
        
    Returns:
        list: List of dicts with page image metadata
    """
    doc = fitz.open(pdf_path)
    output_path = Path(output_dir)
    output_path.mkdir(parents=True, exist_ok=True)
    
    rendered_pages = []
    
    for page_num in range(start_page - 1, len(doc)):  # Convert to 0-indexed
        page = doc[page_num]
        
        # Render entire page at high resolution
        pix = page.get_pixmap(dpi=dpi)
        
        # Generate filename
        filename = f"page{page_num + 1}_full.png"
        filepath = output_path / filename
        
        # Save rendered page
        pix.save(str(filepath))
        
        rendered_pages.append({
            'page': page_num + 1,
            'path': str(filepath),
            'width': pix.width,
            'height': pix.height,
            'dpi': dpi
        })
        
        print(f"✓ Rendered page {page_num + 1}: {pix.width}x{pix.height}px")
    
    doc.close()
    
    print(f"\n✓ Rendered {len(rendered_pages)} pages to {output_dir}")
    return rendered_pages


def extract_images_hybrid(pdf_path, output_dir, start_page=3, 
                          extract_embedded=True, render_pages=True, dpi=300):
    """
    

    Args:
        pdf_path: Path to PDF file
        output_dir: Directory to save images
        start_page: First page to process (1-indexed)
        extract_embedded: Try extracting embedded images
        render_pages: Render full pages as fallback
        dpi: Resolution for page rendering
        
    Returns:
        dict: {'embedded': [...], 'rendered': [...]}
    """
    doc = fitz.open(pdf_path)
    output_path = Path(output_dir)
    output_path.mkdir(parents=True, exist_ok=True)
    
    embedded_images = []
    rendered_pages = []
    seen_xrefs = set()
    
    # Track which pages have usable embedded images
    pages_with_good_images = set()
    
    if extract_embedded:
        print("Extracting embedded images...")
        for page_num in range(start_page - 1, len(doc)):
            page = doc[page_num]
            images = page.get_images()
            
            page_has_good_image = False
            
            for img_idx, img in enumerate(images):
                xref = img[0]
                
                if xref in seen_xrefs:
                    continue
                
                try:
                    img_data = doc.extract_image(xref)
                    
                    # More aggressive filtering - only "good" images
                    min_width = 200
                    min_height = 200
                    
                    if img_data['width'] >= min_width and img_data['height'] >= min_height:
                        filename = f"page{page_num + 1}_embedded{img_idx + 1}.{img_data['ext']}"
                        filepath = output_path / filename
                        
                        with open(filepath, 'wb') as f:
                            f.write(img_data['image'])
                        
                        embedded_images.append({
                            'page': page_num + 1,
                            'path': str(filepath),
                            'width': img_data['width'],
                            'height': img_data['height'],
                            'type': 'embedded'
                        })
                        
                        page_has_good_image = True
                        seen_xrefs.add(xref)
                        
                        print(f"  ✓ Embedded image on page {page_num + 1}: {img_data['width']}x{img_data['height']}")
                
                except Exception as e:
                    print(f"  ⚠ Error extracting xref={xref}: {e}")
            
            if page_has_good_image:
                pages_with_good_images.add(page_num + 1)
    
    # Render pages that don't have good embedded images
    if render_pages:
        print("\nRendering pages without good embedded images...")
        for page_num in range(start_page - 1, len(doc)):
            page_idx = page_num + 1
            
            # Skip if this page already has good embedded images
            if page_idx in pages_with_good_images:
                print(f"  → Skipping page {page_idx} (has good embedded images)")
                continue
            
            page = doc[page_num]
            pix = page.get_pixmap(dpi=dpi)
            
            filename = f"page{page_idx}_rendered.png"
            filepath = output_path / filename
            
            pix.save(str(filepath))
            
            rendered_pages.append({
                'page': page_idx,
                'path': str(filepath),
                'width': pix.width,
                'height': pix.height,
                'type': 'rendered'
            })
            
            print(f"  ✓ Rendered page {page_idx}: {pix.width}x{pix.height}px")
    
    doc.close()
    
    print(f"\n✓ Extracted {len(embedded_images)} embedded images")
    print(f"✓ Rendered {len(rendered_pages)} full pages")
    
    return {
        'embedded': embedded_images,
        'rendered': rendered_pages,
        'all': embedded_images + rendered_pages
    }


if __name__ == "__main__":
    print("="*60)
    print("Improved Image Extraction Test")
    print("="*60)
    print()
    
    # Resolve paths relative to script location
    script_dir = Path(__file__).parent
    project_root = script_dir.parent
    data_dir = project_root / "data"
    output_dir = project_root / "output" / "images_improved"
    
    # Test hybrid approach
    result = extract_images_hybrid(
        str(data_dir / "questions.pdf"),
        str(output_dir),
        start_page=3,  # Skip pages 1-2 (logos/headers)
        extract_embedded=True,
        render_pages=True,
        dpi=300
    )
    
    print("\n" + "="*60)
    print("SUMMARY")
    print("="*60)
    print(f"Total images: {len(result['all'])}")
    print(f"  - Embedded: {len(result['embedded'])}")
    print(f"  - Rendered: {len(result['rendered'])}")
    print("\nCheck output/images_improved/ directory")
