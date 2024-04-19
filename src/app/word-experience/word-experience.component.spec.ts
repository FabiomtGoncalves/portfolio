import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordExperienceComponent } from './word-experience.component';

describe('WordExperienceComponent', () => {
  let component: WordExperienceComponent;
  let fixture: ComponentFixture<WordExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WordExperienceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WordExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
