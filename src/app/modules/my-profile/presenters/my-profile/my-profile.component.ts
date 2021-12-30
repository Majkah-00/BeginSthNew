import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Camera } from '@ionic-native/camera/ngx';
import { User } from '../../../../shared/models/user.model';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {
  @Input() set user(userData: User) {
    this.form.patchValue(userData);
  };
  @Output() saveUser = new EventEmitter();

  photo: any;

  form = this.fb.group({
    userId:[null],
    email: [''],
    name: [''],
    surname: [''],
    phone: ['']
  });

  constructor(private fb: FormBuilder, private camera: Camera) {
  }

  ngOnInit() {
    this.form.disable();
  }

  async onTakePhoto() {
    this.camera.getPicture({
      quality: 100,
      targetWidth: 600,
      sourceType: this.camera.PictureSourceType.CAMERA,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }).then(res => {
      this.photo = (window as any).Ionic.WebView.convertFileSrc(res);
    }).catch(error => {
      console.log(error);
    });
  }

  onToggleEdit(): void {
    if (this.form.disabled) {
      this.form.enable();
    } else {
      this.form.disable();
      this.saveUser.emit(this.form.value);
    }
  }
}
