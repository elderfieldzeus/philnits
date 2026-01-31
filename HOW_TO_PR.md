# How to Create Your First Pull Request

## Step 1: Prepare Your Changes

### Check What You've Changed

```bash
cd philnits
git status
```

1. You should see changes in:

- `scripts/` (new directory with 7 Python files)
- `app/page.tsx` (dev mode)
- `app/components/LandingPage.tsx` (dev mode indicator)
- `docs/DEV_MODE.md` (new file)
- `scripts/PIPELINE_USAGE.md` (new file)
- `PR_READY.md` (new file)
- `README.md` (updated)

### Make Sure You're NOT Committing

```bash
# Check .gitignore includes these
git status | grep temp/
git status | grep node_modules/
git status | grep .next/
```

If you see `temp/`, `node_modules/`, or `.next/` in changes, add them to `.gitignore` first.

---

## Step 2: Create a Feature Branch

**CRITICAL: Never work on main/master branch directly**

```bash
# Make sure you're on main and it's up to date
git checkout main
git pull origin main

# Create a new branch with a descriptive name
git checkout -b feature/qa-pipeline-integration

# Or if you prefer kebab-case
git checkout -b feat/qa-mapper-pipeline-consolidation
```

**Branch naming conventions:**

- `feature/` or `feat/` for new features
- `fix/` for bug fixes
- `docs/` for documentation only
- Use lowercase and hyphens

---

## Step 3: Stage Your Changes

### Review Changes First

```bash
# See what changed in each file
git diff scripts/pipeline.py
git diff app/page.tsx
```

### Stage Files

```bash
# Add specific files/directories
git add scripts/
git add app/page.tsx
git add app/components/LandingPage.tsx
git add docs/DEV_MODE.md
git add scripts/PIPELINE_USAGE.md
git add README.md

# Or add all (be careful!)
git add .
```

### Verify What's Staged

```bash
git status
```

**Double-check:**

- ✅ All your new files are included
- ❌ No temp files
- ❌ No node_modules
- ❌ No personal config files
- ❌ No API keys or credentials

---

## Step 4: Commit Your Changes

### Write a Good Commit Message

```bash
git commit -m "feat: consolidate QA mapper pipeline and add developer mode

- Migrate all 7 processing scripts to philnits/scripts/
- Implement unified pipeline.py with auto-directory creation
- Add frontend developer mode for visual content testing
- Include comprehensive debug mode with --verbose and --dry-run flags
- Document pipeline usage and developer mode activation

Closes #[issue-number if applicable]"
```

**Commit message format:**

```
<type>: <short summary> (50 chars or less)

<blank line>

<detailed description in bullet points>
- What changed
- Why it changed
- How to use new features

<blank line>

<references to issues/tickets if any>
```

**Types:**

- `feat:` new feature
- `fix:` bug fix
- `docs:` documentation only
- `refactor:` code restructuring
- `test:` adding tests
- `chore:` maintenance tasks

---

## Step 5: Push to GitHub

```bash
# First time pushing this branch
git push -u origin feature/qa-pipeline-integration

# Subsequent pushes (if you make more commits)
git push
```

You'll see output like:

```
remote: Create a pull request for 'feature/qa-pipeline-integration' on GitHub by visiting:
remote:   https://github.com/[username]/philnits/pull/new/feature/qa-pipeline-integration
```

---

## Step 6: Create Pull Request on GitHub

### Navigate to Repository

1. Go to `https://github.com/[username]/philnits`
2. You'll see a yellow banner: "feature/qa-pipeline-integration had recent pushes"
3. Click **"Compare & pull request"**

OR manually:

1. Click "Pull requests" tab
2. Click "New pull request"
3. Select your branch: `base: main` ← `compare: feature/qa-pipeline-integration`
4. Click "Create pull request"

---

## Step 7: Write an Excellent PR Description

### Title (Auto-filled from commit, but you can edit)

```
feat: Consolidate QA mapper pipeline and add developer mode
```

### Description Template

```markdown
## Summary
This PR consolidates the QA mapping pipeline into the main repository and adds a developer mode for testing visual content integration.

## Changes Made

### Backend
- ✅ Migrated 7 processing scripts to `philnits/scripts/` directory
- ✅ Created unified `pipeline.py` with 2 phases: parse-questions, add-visuals
- ✅ Auto-directory creation for year-organized structure
- ✅ Comprehensive debug mode: `--verbose`, `--dry-run` flags
- ✅ Removed unused `visual_content_mapping.json` generation

### Frontend
- ✅ Developer mode via URL parameter: `?dev=2025`
- ✅ Landing page shows dev mode indicator and visual content count
- ✅ Dynamic question filtering for specified year
- ✅ No UI buttons (URL-only activation for production safety)

### Documentation
- ✅ `scripts/PIPELINE_USAGE.md` - Complete pipeline guide
- ✅ `docs/DEV_MODE.md` - Developer mode documentation
- ✅ Updated `README.md` with pipeline overview

## Testing Done
- [x] Pipeline tested with 2025 PDF data
- [x] Visual content injection validated
- [x] Dev mode tested: `http://localhost:3000/?dev=2025`
- [x] Normal mode still works without parameters
- [x] Visual content count displays correctly

## Breaking Changes
**None** - This is purely additive:
- Existing webapp functionality unchanged
- New features are opt-in
- Old scripts remain in place (can be removed later)

## How to Test
```bash
# Test pipeline
cd philnits/scripts
python pipeline.py parse-questions --year 2025 --verbose

# Test frontend dev mode
cd philnits
npm run dev
# Visit: http://localhost:3000/?dev=2025
```

## Screenshots (Optional but Impressive)

[If you have screenshots of dev mode in action, add them here]

## References

- Solutions adapted from: https://github.com/usc-cisco/philnits-vault
- Pipeline design rationale documented in code comments

## Checklist

- [X] Code follows project style guidelines
- [X] Documentation updated
- [X] No breaking changes
- [X] Tested locally
- [X] All temporary files excluded from commit
- [X] No hardcoded credentials or paths

---

**Ready for review!** 🚀

```

---

## Step 8: Handle Review Feedback

### What Your Senior Might Ask

**Common review comments:**
1. "Why monolithic instead of modular?" 
   → Already documented in pipeline.py docstring
   
2. "How do students not accidentally trigger dev mode?"
   → Explain URL-only activation, no UI exposure
   
3. "What about solutions?"
   → Explain they're optional, added manually post-pipeline
   
4. "Can we automate diagram cropping?"
   → Explain technical limitations, future enhancement

### How to Respond

**Good response:**
```

Thanks for the feedback! You're right about [issue].

I've updated [file] to [fix]. The change ensures [benefit].

Pushed in commit abc1234.

```

**Bad response:**
```

I don't think that's necessary.

```

### Making Changes After PR Created

```bash
# Make your changes
git add [files]
git commit -m "fix: address review feedback - [what you changed]"
git push

# The PR automatically updates!
```

---

## Step 9: After PR is Merged

```bash
# Switch back to main
git checkout main

# Pull the merged changes
git pull origin main

# Delete your feature branch (cleanup)
git branch -d feature/qa-pipeline-integration

# Delete remote branch (optional, often done automatically)
git push origin --delete feature/qa-pipeline-integration
```

---

## Quick Troubleshooting

### "I committed something I shouldn't have"

```bash
# Undo last commit (keeps changes)
git reset HEAD~1

# Remove file from staging
git reset HEAD temp/some-file.txt

# Recommit correctly
git add [correct files]
git commit -m "..."
git push --force
```

### "My branch is behind main"

```bash
git checkout main
git pull origin main
git checkout feature/qa-pipeline-integration
git rebase main
git push --force
```

### "I made a typo in the commit message"

```bash
# Before pushing
git commit --amend -m "New message"
git push --force

# After pushing (less ideal)
# Just add a new commit with fixes
```

### "I pushed to main by accident"

**Don't panic.** Contact your senior immediately. They can help revert.

---

## Pro Tips for Impressing Your Senior

### ✅ DO:

- **Keep PR focused**: One feature at a time
- **Write clear descriptions**: Explain why, not just what
- **Test thoroughly**: Show you tested multiple scenarios
- **Update docs**: Show you care about maintainability
- **Respond quickly**: Check GitHub notifications daily
- **Be humble**: "Great catch! I'll fix that."
- **Ask questions**: "Should I also update [X]?"

### ❌ DON'T:

- Mix unrelated changes in one PR
- Push without testing first
- Get defensive about feedback
- Force-push after review started (unless asked)
- Leave commented-out code
- Include TODOs without GitHub issues
- Commit secrets, keys, or credentials

---

## The Golden Rule

**Your senior cares about:**

1. **Does it work?** (Testing)
2. **Can others understand it?** (Documentation)
3. **Will it break things?** (Backward compatibility)
4. **Can we maintain it?** (Code quality)

If you can confidently say "yes" to all four, you're golden.

---

## Final Pre-PR Checklist

```bash
# Run this before creating PR
cd philnits

# Check status
git status

# Run any tests
npm run build  # Make sure it builds
npm run dev    # Make sure it runs

# Check for secrets
git diff | grep -i "password\|api_key\|secret\|token"

# Review your changes one more time
git diff main..HEAD

# All good? Create the PR!
```

---

**You've got this!** Your senior will appreciate the effort you put into documentation and testing. That's what separates good PRs from great ones.

Good luck! 🚀
