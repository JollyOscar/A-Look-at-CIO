# PowerShell Image Processing Script
# This script will help you organize your images for the website

Write-Host "`n=== Website Image Setup ===" -ForegroundColor Cyan
Write-Host "This script will help you place your downloaded images in the correct location.`n"

$scriptDir = $PSScriptRoot
$publicDir = Join-Path $scriptDir "app\public"

# Create public directory if it doesn't exist
if (-not (Test-Path $publicDir)) {
    New-Item -ItemType Directory -Path $publicDir -Force | Out-Null
}

# Find PNG files in current directory
$pngFiles = Get-ChildItem -Path $scriptDir -Filter "*.png" | Select-Object -ExpandProperty Name

if ($pngFiles.Count -eq 0) {
    Write-Host "No PNG files found in current directory!" -ForegroundColor Red
    Write-Host "`nPlease:"
    Write-Host "1. Save your 3 downloaded images to: $scriptDir"
    Write-Host "2. Run this script again"
    Read-Host "`nPress Enter to exit"
    exit
}

Write-Host "Found $($pngFiles.Count) PNG files:" -ForegroundColor Green
for ($i = 0; $i -lt $pngFiles.Count; $i++) {
    Write-Host "  $($i + 1). $($pngFiles[$i])"
}

Write-Host "`n--- STEP 1: Icon Files ---" -ForegroundColor Yellow
Write-Host "Which image is the CIRCULAR SHIELD icon?"
$iconChoice = Read-Host "Enter number"

Write-Host "`n--- STEP 2: Social Media Image ---" -ForegroundColor Yellow
Write-Host "Which image is the HORIZONTAL BANNER with full text?"
$ogChoice = Read-Host "Enter number"

try {
    $iconFile = $pngFiles[[int]$iconChoice - 1]
    $ogFile = $pngFiles[[int]$ogChoice - 1]
    
    # Copy and rename files
    Write-Host "`nProcessing files..." -ForegroundColor Cyan
    
    # Copy icon file for both favicon and apple-touch-icon
    Copy-Item (Join-Path $scriptDir $iconFile) (Join-Path $publicDir "apple-touch-icon.png") -Force
    Write-Host "✓ Created apple-touch-icon.png" -ForegroundColor Green
    
    Copy-Item (Join-Path $scriptDir $iconFile) (Join-Path $publicDir "favicon.ico") -Force
    Write-Host "✓ Created favicon.ico" -ForegroundColor Green
    
    # Copy og-image
    Copy-Item (Join-Path $scriptDir $ogFile) (Join-Path $publicDir "og-image.png") -Force
    Write-Host "✓ Created og-image.png" -ForegroundColor Green
    
    Write-Host "`n✓ All images processed successfully!" -ForegroundColor Green
    Write-Host "`nFiles saved to: $publicDir" -ForegroundColor Cyan
    Write-Host "`nNext steps:"
    Write-Host "1. Run: npm run build"
    Write-Host "2. Commit and push changes"
    
} catch {
    Write-Host "`nError: Invalid selection!" -ForegroundColor Red
}

Write-Host ""
Read-Host "Press Enter to exit"
