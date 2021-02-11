import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShowGradesPage } from './show-grades.page';

describe('ShowGradesPage', () => {
  let component: ShowGradesPage;
  let fixture: ComponentFixture<ShowGradesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowGradesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShowGradesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
