import { Component } from '@angular/core';
import {AppState} from "../app.state";

@Component({
  selector: 'app-light',
  template: `
    <disqus [identifier]="identifier" [title]="title" [shortname]="shortname" (comment)="display($event)"></disqus>
    `
})
export class LightComponent {

  shortname = 'ng2';
  identifier = 'light';
  title = 'Light Theme';

  constructor(appState: AppState) {
    /** add dark class to app */

    appState.set('themeSwitcher', false);
    appState.set('themeName', 'Light Theme');
    appState.set('themeCover', prefixRepo("../../assets/img/light.png"));
  }

  display(comment){
    console.log(comment);
    alert(`It works 😎 \n${JSON.stringify(comment)}`);
  }
}
var prefixRepo = (path) => {
  return 'ng2-disqus' + path;
};
