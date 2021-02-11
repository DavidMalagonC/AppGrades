import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UploadGradesPage } from './upload-grades.page';

describe('UploadGradesPage', () => {
  let component: UploadGradesPage;
  let fixture: ComponentFixture<UploadGradesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadGradesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UploadGradesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
