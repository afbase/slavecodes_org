#!/bin/bash

# Define the folders as an array
SLAVE_CODE_FOLDERS=(
    "1664-jamaica-slave-code"
    "1667-barbados-slave-code"
    "1685-code-noir"
    "1724-louisiana-code-noir"
    "1784-codigo-negro-carolino"
    "1860-district-columbia-slave-codes"
)

# Get current date and time in RFC-3339 format
current_datetime=$(date -u +"%Y-%m-%dT%H:%M:%SZ")

# Function to generate front matter
generate_front_matter() {
    local title="$1"
    local description="$2"
    local template="$3"
    
    echo "+++"
    echo "title = \"$title\""
    echo "description = \"$description\""
    echo "date = \"$current_datetime\""
    echo "updated = \"$current_datetime\""
    echo "sort_by = \"weight\""
    echo "weight = 0"
    echo "template = \"$template\""
    echo "+++"
    echo
}

# Function to create files for a folder
create_files_for_folder() {
    local folder="$1"
    
    # Extract year and name from folder
    year=${folder:0:4}
    name=${folder:5}
    
    # Create _index.md
    index_file="$folder/_index.md"
    mkdir -p "$folder"
    touch "$index_file"
    index_title="$year ${name^} Section"
    index_description="Overview of the $year ${name^}"
    generate_front_matter "$index_title" "$index_description" "codes/section.html" > "$index_file"
    
    # Create slave code markdown file
    code_file="$folder/$name.md"
    touch "$code_file"
    code_title="${name^} ($year)"
    code_description="Detailed information about the $year ${name^}"
    generate_front_matter "$code_title" "$code_description" "codes/page.html" > "$code_file"
    
    echo "Created files for $folder"
}

# Main execution
echo "Starting file generation..."

# Loop through each folder in the array
for folder in "${SLAVE_CODE_FOLDERS[@]}"; do
    create_files_for_folder "$folder"
done

echo "File generation complete."