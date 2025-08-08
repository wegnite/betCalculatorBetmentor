#!/usr/bin/env python3
"""
Simple ICO file creator for BetMentor favicon
Creates a basic ICO file with embedded PNG data
"""

import struct

def create_simple_ico():
    # Simple 16x16 favicon data (minimal PNG-like structure)
    # This creates a basic ICO file that browsers will accept
    
    # ICO header: 6 bytes
    ico_header = struct.pack('<HHH', 0, 1, 1)  # Reserved, Type (1=ICO), Count
    
    # ICO directory entry: 16 bytes
    # Width, Height, Colors, Reserved, Planes, BitCount, BytesInRes, ImageOffset
    ico_dir_entry = struct.pack('<BBBBHHLL', 16, 16, 0, 0, 1, 32, 0, 22)
    
    # Simple bitmap data (16x16 pixels, 32-bit RGBA)
    # Create gradient background with "B" letter
    bitmap_data = bytearray()
    
    # Bitmap header (40 bytes)
    bmp_header = struct.pack('<LLLHHLLLLLL', 
        40,        # Header size
        16,        # Width
        32,        # Height (doubled for ICO)
        1,         # Planes
        32,        # Bits per pixel
        0,         # Compression
        0,         # Image size
        0,         # X pixels per meter
        0,         # Y pixels per meter
        0,         # Colors used
        0          # Important colors
    )
    
    # Create pixel data (16x16 RGBA)
    for y in range(16):
        for x in range(16):
            # Create gradient background
            r = int(255 - (x + y) * 4)  # Gold to red gradient
            g = int(215 - x * 8)        # Fade green
            b = int(0 + y * 8)          # Add some blue
            a = 255                     # Full opacity
            
            # Draw letter "B" in white
            if (5 <= x <= 10 and 3 <= y <= 12):
                # Letter B shape (simplified)
                if (x == 5 or x == 10 or y == 3 or y == 7 or y == 12):
                    r, g, b = 255, 255, 255  # White
                elif (6 <= x <= 9 and (4 <= y <= 6 or 8 <= y <= 11)):
                    r, g, b = 255, 255, 255  # White
            
            # ICO format uses BGRA order
            bitmap_data.extend([b, g, r, a])
    
    # Add AND mask (1 bit per pixel, all transparent)
    and_mask = bytearray(32)  # 16*16/8 = 32 bytes, all zeros (transparent)
    
    # Combine all data
    image_data = bmp_header + bitmap_data + and_mask
    
    # Update the BytesInRes in directory entry
    ico_dir_entry = struct.pack('<BBBBHHLL', 16, 16, 0, 0, 1, 32, len(image_data), 22)
    
    return ico_header + ico_dir_entry + image_data

# Create the ICO file
ico_data = create_simple_ico()

# Write to file
with open('/Users/shengdongyang/githubWrokspace/betcalculatorbetmentor/public/favicon-new.ico', 'wb') as f:
    f.write(ico_data)

print("✅ New favicon.ico created successfully!")
print(f"📏 File size: {len(ico_data)} bytes")