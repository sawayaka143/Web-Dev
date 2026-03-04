import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AlbumService } from '../../services/album-service';
import { Photo } from '../../models/photo';

@Component({
  selector: 'app-album-photos',
  imports: [CommonModule, RouterLink],
  templateUrl: './album-photos.html',
  styleUrl: './album-photos.css'
})
export class AlbumPhotos implements OnInit {
  photos: Photo[] = [];
  isLoading = true;
  private route = inject(ActivatedRoute);
  private albumService = inject(AlbumService);

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumService.getAlbumPhotos(id).subscribe(data => {
      this.photos = data;
      this.isLoading = false;
    });
  }
}
