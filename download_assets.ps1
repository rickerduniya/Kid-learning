$baseUrl = "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis"
$dist = "src/assets/images/categories"
if (!(Test-Path $dist)) { New-Item -ItemType Directory -Force -Path $dist }

$icons = @{
    "letters" = "Symbols/Keycap%20A.png"
    "reading" = "Objects/Open%20Book.png"
    "numbers" = "Symbols/Keycap%201.png"
    "math" = "Symbols/Plus.png"
    "shapes" = "Symbols/Red%20Circle.png"
    "evs" = "Travel%20and%20places/Globe%20Showing%20Europe-Africa.png"
    "stories" = "Travel%20and%20places/Castle.png"
    "rhymes" = "Objects/Microphone.png"
    "art" = "Activities/Artist%20Palette.png"
    "gk" = "Objects/Light%20Bulb.png"
    "emotions" = "Smilies/Grinning%20Face%20With%20Big%20Eyes.png"
}

# Try alternate paths if primary fails
$alternates = @{
    "evs" = "Travel/Globe%20Showing%20Europe-Africa.png"
    "stories" = "Travel/Castle.png"
}

foreach ($key in $icons.Keys) {
    echo "Downloading $key..."
    try {
        Invoke-WebRequest -Uri "$baseUrl/$($icons[$key])" -OutFile "$dist/$key.png" -ErrorAction Stop
        echo "Success: $key"
    } catch {
        echo "try alternate for $key"
        if ($alternates.ContainsKey($key)) {
             try {
                Invoke-WebRequest -Uri "$baseUrl/$($alternates[$key])" -OutFile "$dist/$key.png" -ErrorAction Stop
                echo "Success (Alt): $key"
            } catch {
                echo "Failed: $key"
            }
        } else {
            echo "Failed: $key"
        }
    }
}
