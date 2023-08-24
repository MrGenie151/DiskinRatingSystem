for filename in *; do
echo ${filename}
inkscape ${filename} --export-type=png --export-filename=${filename}.png
done
