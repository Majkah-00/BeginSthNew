import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Camera } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss'],
})
export class MyProfileComponent implements OnInit {
  photo: any;

  form = this.fb.group({
    email: [''],
    name: [''],
    surname: [''],
    phone: ['']
  });
  constructor(private fb: FormBuilder, private camera: Camera) { }

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
}
