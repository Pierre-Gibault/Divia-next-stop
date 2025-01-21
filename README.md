Divia Next Stop - GNOME Extension

Divia Next Stop is a GNOME Shell extension that provides users with the next bus departure times for the city of Dijon, France. The extension fetches real-time bus schedule information from the Divia public transportation system and displays it directly in the GNOME panel. The project is under active development, and contributions are encouraged.
Features

    Displays the upcoming bus departure times for Divia (Dijon’s public transportation system).
    Fetches real-time data using the Soup library for HTTP requests.
    Easy access to bus schedules directly from the GNOME panel.
    Lightweight and simple user interface, integrated into the GNOME Shell environment.

Installation
Prerequisites

Before installing, make sure you have the following:

    GNOME Shell (version 3.36 or later).
    The Soup library for handling HTTP requests (used by the extension to fetch timetable data).

Steps

    Clone the repository:

git clone https://github.com/Pierre-Gibault/Divia-next-stop.git

Copy the extension to the GNOME extensions folder:

    cp -r divia-next-stop ~/.local/share/gnome-shell/extensions/

    Enable the extension: You can enable the extension using either GNOME Tweaks or the GNOME Shell Extensions app.

    Restart GNOME Shell: Press Alt + F2, type r, and hit Enter to restart GNOME Shell.

    Enable the "Divia Next Stop" extension: Open GNOME Tweaks and enable the extension under the Extensions tab.

Usage

Once the extension is enabled, it will display the next bus departure times for Divia directly on your GNOME panel. You can click on the extension icon to refresh the timetable or view additional details.

The extension will automatically update the displayed times based on the latest available data from the Divia API.
Development

This project is under active development, The goals for future updates include:

    Add bus line selector
    Add stop selector
    Improve error handling in case the API is unavailable.
    Optimize data fetching and caching to reduce unnecessary requests.
    Add support for multiple cities or transport systems (planned future feature).

License

This project is licensed under the MIT License - see the LICENSE file for details.
Acknowledgments

    Soup: For making HTTP requests in the extension.
    Divia: The public transportation system of Dijon, providing the timetable data.
