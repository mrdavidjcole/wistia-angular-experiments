import { Component } from '@angular/core';

@Component({
  selector: 'wistia-embed',
  template: `<div class="wistia_embed wistia_async_{{hashedId}}" style="height:360px;width:640px">&nbsp;</div>`,
})
export class AppComponent  { hashedId = 'gvdwcza7ta'; }
