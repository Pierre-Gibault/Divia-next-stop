import St from "gi://St";

import { Extension } from "resource:///org/gnome/shell/extensions/extension.js";
import * as Main from "resource:///org/gnome/shell/ui/main.js";
import * as PanelMenu from "resource:///org/gnome/shell/ui/panelMenu.js";
import Soup from "gi://Soup";

export default class ExampleExtension extends Extension {
  enable() {
    let busTramExtension = new BusTramExtension();
    let result = busTramExtension._getNextBusInfo();
    // Create a panel button
    this._indicator = new PanelMenu.Button(0.0, this.metadata.name, false);

    // Add an icon
    const icon = new St.Icon({
      icon_name: "face-laugh-symbolic",
      style_class: "system-status-icon",
    });
    const label = new St.Label({
      text: result,
    });

    this._indicator.add_child(label);

    // Add the indicator to the panel
    Main.panel.addToStatusArea(this.uuid, this._indicator);
  }

  disable() {
    this._indicator?.destroy();
    this._indicator = null;
  }
}

class BusTramExtension {
  constructor() {}

  _getNextBusInfo() {
    let queryResult = "test";
    let session = new Soup.Session();

    let request = Soup.Message.new(
      "POST",
      "https://www.divia.fr/bus-tram?type=479&requete=arret_prochainpassage&requete_val%5Bid_ligne%5D=100&requete_val%5Bid_arret%5D=180"
    );

    request
      .get_request_headers()
      .set_content_type("application/x-www-form-urlencoded", null);

    request.get_request_headers().append("X-Requested-With", "XMLHttpRequest");
    let result = session.send_and_read(
      request,
      null,
      function (session, result) {
        if (message.get_status() === Soup.Status.OK) {
          let bytes = session.send_and_read_finish(result);
          let decoder = new TextDecoder("utf-8");
          let response = decoder.decode(bytes.get_data());

          queryResult = "response";
        }
      }
    );
    return queryResult;
  }

  _parseAndUpdateLabel(responseBody) {
    const regex = /<span class="uk-badge">\s*(((0?|[12])\d):(\d{2}))<\/span>/gi;
    let match;
    let nextBusTime = "No bus info available";

    while ((match = regex.exec(responseBody)) !== null) {
      nextBusTime = match[1];
      break;
    }

    return responseBody;
  }
}
