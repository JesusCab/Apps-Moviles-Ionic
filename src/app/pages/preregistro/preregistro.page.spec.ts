import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PreregistroPage } from './preregistro.page';

describe('PreregistroPage', () => {
  let component: PreregistroPage;
  let fixture: ComponentFixture<PreregistroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreregistroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PreregistroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
