import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AlbumService } from '../../services/album-service';
import { Album } from '../../models/album';

@Component({
  selector: 'app-album-detail',
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './album-detail.html',
  styleUrl: './album-detail.css',
})
export class AlbumDetail implements OnInit {
  album!: Album;
  private route = inject(ActivatedRoute);
  private albumService = inject(AlbumService);

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumService.getAlbum(id).subscribe(data => this.album = data);
  }

  save() {
    this.albumService.updateAlbum(this.album).subscribe(updated => {
      this.album = updated;
      alert('Album updated successfully.');
    });
  }
}
