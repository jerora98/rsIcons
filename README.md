# Icon Framework

This is a lightweight framework for easily integrating icons into web pages. It provides a simple way to add stylish icons using HTML, CSS, and JavaScript.

## Getting Started

To use this framework, follow these steps:

1. Include the CSS and JavaScript files in your HTML file:

    ```html
    <link rel="stylesheet" type="text/css" href="https://rassweiler-it.de/rsIcons/rsIcons.css">
    <script src="https://rassweiler-it.de/rsIcons/rsIcons.main.js"></script>
    ```

2. Add an element with the class `rsIcon` followed by the specific icon class. For example, to add a calendar icon, use:

    ```html
    <div class="rsIcon rsCalendar"></div>
    ```

3. Customize the appearance of the icons by modifying the CSS classes or adding your own styles.

    For example, to change the default size of an icon, you can modify the `font-size` property of the corresponding CSS class. Here's an example of how to change the size of the calendar icon:
   ```html
    .rsIcon.rsCalendar {
        font-size: 20px; /* Default icon size */
    }
   ```

## Available Icons

Currently, the following icons are available:

- Calendar:        `<div class="rsIcon rsCalendar"></div>`
- Digital Clock:   `<div class="rsIcon rsClock"></div>`
- Analog Clock:    `<div class="rsIcon rsAnalogClock"></div>`
- [Add more icons here]

## Contributing

Contributions are welcome! If you have ideas for new icons or improvements to the framework, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE.txt](LICENSE) file for details.

