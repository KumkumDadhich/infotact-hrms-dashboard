@echo off
echo ==============================================
echo Pushing HRMS Backend Code to GitHub Repository
echo ==============================================
echo.

cd /d "%~dp0"

echo 1. Checking Git initialization...
if not exist .git (
    echo Git is not initialized. Initializing...
    git init
) else (
    echo Git is already initialized.
)

echo.
echo 2. Setting remote repository...
git remote remove origin >nul 2>&1
git remote add origin https://github.com/KumkumDadhich/infotact-hrms-dashboard.git
git remote -v

echo.
echo 3. Staging and committing files...
git add .
git commit -m "feat: setup Express server, MongoDB connection, JWT auth, and RBAC middleware"

echo.
echo 4. Pushing code to Kumkum-dev branch...
echo Pushing to branch 'Kumkum-dev'...
git push -u origin Kumkum-dev

if %ERRORLEVEL% neq 0 (
    echo.
    echo [ERROR] Push failed on Kumkum-dev. Let's try pushing to the 'main' branch instead.
    echo.
    echo Pushing to branch 'main'...
    git push -u origin main
)

echo.
echo ==============================================
echo Task Complete! Press any key to exit.
echo ==============================================
pause
