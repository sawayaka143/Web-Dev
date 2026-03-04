import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AlbumService } from '../../services/album-service';
import { Album } from '../../models/album';

@Component({
  selector: 'app-albums',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './albums.html',
  styleUrl: './albums.css',
})
export class Albums implements OnInit {
  albums: Album[] = [];
  isLoading = true;
  private albumService = inject(AlbumService);

  ngOnInit() {
    this.albumService.getAlbums().subscribe((data) => {
      this.albums = data;
      this.isLoading = false;
    });
  }

  deleteAlbum(id: number) {
    const previousAlbums = [...this.albums];

    this.albums = this.albums.filter((a) => a.id !== id);

    this.albumService.deleteAlbum(id).subscribe({
      error: () => {
        this.albums = previousAlbums;
        console.error('Network failure: Deletion reverted.');
      },
    });
  }
}
