import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsdetallesComponent } from './postsdetalles.component';

describe('PostsdetallesComponent', () => {
  let component: PostsdetallesComponent;
  let fixture: ComponentFixture<PostsdetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostsdetallesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsdetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
