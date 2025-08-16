# PowerShell script to create favicon files from the ReviewCraft logo
# This script requires ImageMagick or similar tool to be installed

Write-Host "Creating favicon files from ReviewCraft logo..."

# Define paths
$logoPath = "c:\Users\Abish\Desktop\office\review-craft\public\images\logo.png"
$publicPath = "c:\Users\Abish\Desktop\office\review-craft\public"

# Check if logo exists
if (Test-Path $logoPath) {
    Write-Host "Logo found at: $logoPath"
    
    # Create different favicon sizes
    # Note: This requires ImageMagick to be installed
    # Alternative: Use online favicon generators with the logo
    
    Write-Host "To create favicon files, you can:"
    Write-Host "1. Use an online favicon generator like favicon.io"
    Write-Host "2. Upload your logo.png file"
    Write-Host "3. Download the generated favicon package"
    Write-Host "4. Extract the files to the public directory"
    
    Write-Host ""
    Write-Host "Required files:"
    Write-Host "- favicon.ico (for browsers)"
    Write-Host "- favicon-16x16.png"
    Write-Host "- favicon-32x32.png" 
    Write-Host "- apple-touch-icon.png (180x180)"
    
} else {
    Write-Host "Logo not found. Please save your ReviewCraft logo as logo.png in:"
    Write-Host $logoPath
}

Write-Host ""
Write-Host "Favicon metadata has been added to layout.tsx"
