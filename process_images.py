"""
Process images for website favicon, apple-touch-icon, and og-image.
Place your source images in the same folder as this script before running.
"""

from PIL import Image
import os

# Get the directory where this script is located
script_dir = os.path.dirname(os.path.abspath(__file__))
output_dir = os.path.join(script_dir, 'app', 'public')

# Create output directory if it doesn't exist
os.makedirs(output_dir, exist_ok=True)

def process_images():
    # Find PNG files in current directory
    png_files = [f for f in os.listdir(script_dir) if f.lower().endswith('.png')]
    
    if not png_files:
        print("No PNG files found in the current directory!")
        print(f"Please place your downloaded images in: {script_dir}")
        return
    
    print(f"Found {len(png_files)} PNG files:")
    for i, file in enumerate(png_files, 1):
        print(f"  {i}. {file}")
    
    # Ask user which files to use
    print("\n--- IMAGE PROCESSING ---")
    print("Which image should be used for the ICON (favicon/apple-touch-icon)?")
    print("This should be the circular shield image.")
    icon_choice = input("Enter number (or filename): ").strip()
    
    print("\nWhich image should be used for the SOCIAL MEDIA preview (og-image)?")
    print("This should be the horizontal banner with text.")
    og_choice = input("Enter number (or filename): ").strip()
    
    # Get filenames
    try:
        icon_file = png_files[int(icon_choice) - 1] if icon_choice.isdigit() else icon_choice
        og_file = png_files[int(og_choice) - 1] if og_choice.isdigit() else og_choice
    except (ValueError, IndexError):
        print("Invalid selection!")
        return
    
    # Process icon image (for favicon and apple-touch-icon)
    print(f"\nProcessing icon: {icon_file}")
    try:
        icon_img = Image.open(os.path.join(script_dir, icon_file))
        
        # Save as apple-touch-icon.png (180x180)
        apple_icon = icon_img.resize((180, 180), Image.Resampling.LANCZOS)
        apple_path = os.path.join(output_dir, 'apple-touch-icon.png')
        apple_icon.save(apple_path, 'PNG')
        print(f"✓ Created: apple-touch-icon.png (180x180)")
        
        # Save as favicon.ico (32x32)
        favicon = icon_img.resize((32, 32), Image.Resampling.LANCZOS)
        favicon_path = os.path.join(output_dir, 'favicon.ico')
        favicon.save(favicon_path, 'ICO')
        print(f"✓ Created: favicon.ico (32x32)")
        
    except Exception as e:
        print(f"Error processing icon: {e}")
        return
    
    # Process og-image
    print(f"\nProcessing social media image: {og_file}")
    try:
        og_img = Image.open(os.path.join(script_dir, og_file))
        
        # Resize to 1200x630 if needed
        if og_img.size != (1200, 630):
            og_img = og_img.resize((1200, 630), Image.Resampling.LANCZOS)
        
        og_path = os.path.join(output_dir, 'og-image.png')
        og_img.save(og_path, 'PNG', optimize=True)
        print(f"✓ Created: og-image.png (1200x630)")
        
    except Exception as e:
        print(f"Error processing og-image: {e}")
        return
    
    print(f"\n✓ All images processed successfully!")
    print(f"Output location: {output_dir}")
    print("\nNext steps:")
    print("1. Run: npm run build")
    print("2. Commit and push changes")

if __name__ == "__main__":
    try:
        process_images()
    except KeyboardInterrupt:
        print("\n\nCancelled by user")
