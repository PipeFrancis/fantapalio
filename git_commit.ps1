# Run the Python script
python version_prepare.py

# Stage all changes
git add .

# Show the git status
git status

# Prompt for commit message
$commitMessage = Read-Host "Enter commit message"

# Commit with the provided message
git commit -m "$commitMessage"

# Push to origin master
git push origin master
