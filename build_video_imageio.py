import imageio
import glob
import os

image_folder = r"C:\Users\Ahana\Documents\antigravity\magical-nobel\Cargo_ship_sails_across_ocean_20261010153804_frames"
video_name = r"public\hero-video.mp4"

images = sorted(glob.glob(os.path.join(image_folder, "*.jpg")))

if not images:
    print("No images found!")
    exit(1)

writer = imageio.get_writer(video_name, fps=24, codec='libx264', format='FFMPEG')
for i, image in enumerate(images):
    img = imageio.imread(image)
    writer.append_data(img)
    if i % 10 == 0:
        print(f"Processed {i}/{len(images)} frames")

writer.close()
print("Video saved successfully with H.264!")
