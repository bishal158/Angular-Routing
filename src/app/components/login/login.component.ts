import { Component } from '@angular/core';
import {faEnvelope, faEyeSlash, faLock} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  protected readonly faEnvelope = faEnvelope
  protected readonly faLock = faLock;
  protected readonly faEyeSlash = faEyeSlash;
}
