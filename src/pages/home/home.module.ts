import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { ShrinkingSegmentHeaderComponent } from '../../components/shrinking-segment-header/shrinking-segment-header';

@NgModule({
  declarations: [
    HomePage,
    ShrinkingSegmentHeaderComponent
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
  ],
})
export class HomePageModule {}
