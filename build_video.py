import cv2
import os
import glob

image_folder = r"C:\Users\Ahana\Documents\antigravity\magical-nobel\Cargo_ship_sails_across_ocean_20261010153804_frames"
video_name = r"public\hero-video.mp4"

images = sorted(glob.glob(os.path.join(image_folder, "*.jpg")))

if not images:
    print("No images found!")
    exit(1)

frame = cv2.imread(images[0])
height, width, layers = frame.shape
print(f"Frame size: {width}x{height}")

fourcc = cv2.VideoWriter_fourcc(*'avc1')
# Try avc1 first
video = cv2.VideoWriter(video_name, fourcc, 24, (width, height))

if not video.isOpened():
    print("avc1 failed, trying mp4v")
    fourcc = cv2.VideoWriter_fourcc(*'mp4v')
    video = cv2.VideoWriter(video_name, fourcc, 24, (width, height))

for image in images:
    video.write(cv2.imread(image))

cv2.destroyAllWindows()
video.release()
print("Video saved to", video_name)
