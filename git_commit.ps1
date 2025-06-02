# Run the Python script
python version_prepare.py

# Stage all changes
git add .

# Show the git status
git status

# Print the current date and time with seconds and a new line
Write-Output "Current Date and Time: $(Get-Date -Format "yyyy-MM-dd HH:mm:ss")"
Write-Output ""  # This prints a blank line for spacing

# Prompt for commit message
$commitMessage = Read-Host "Enter commit message"

# Commit with the provided message
git commit -m "$commitMessage"

# Push to origin master
git push origin master
