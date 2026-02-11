$baseUrl = "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis"
$dist = "src/assets/images/categories"

$icons = @{
    "letters" = "Symbols/Keycap%20A.png"
    "numbers" = "Symbols/Keycap%201.png"
    "emotions" = "Smilies/Grinning%20Face%20With%20Big%20Eyes.png"
}

# Try simpler alternates
$alternates1 = @{
    "letters" = "Symbols/A%20button%20(blood%20type).png"
    "numbers" = "Symbols/Input%20numbers.png"
    "emotions" = "Smilies/Grinning%20face.png"
}

$alternates2 = @{
    "letters" = "Food/Red%20Apple.png"
    "numbers" = "Activities/1st%20place%20medal.png"
    "emotions" = "Smilies/Star-Struck.png"
}

foreach ($key in $icons.Keys) {
    if (Test-Path "$dist/$key.png") { continue }
    
    echo "Retry $key..."
    $success = $false
    
    # Try 1
    try {
        Invoke-WebRequest -Uri "$baseUrl/$($icons[$key])" -OutFile "$dist/$key.png" -ErrorAction Stop
        echo "Success 1: $key"
        $success = $true
    } catch {}

    # Try 2
    if (!$success) {
        try {
            Invoke-WebRequest -Uri "$baseUrl/$($alternates1[$key])" -OutFile "$dist/$key.png" -ErrorAction Stop
            echo "Success 2: $key"
            $success = $true
        } catch {}
    }

    # Try 3 (Fallback)
    if (!$success) {
        try {
            Invoke-WebRequest -Uri "$baseUrl/$($alternates2[$key])" -OutFile "$dist/$key.png" -ErrorAction Stop
            echo "Success 3: $key"
            $success = $true
        } catch { echo "Failed all: $key" }
    }
}
