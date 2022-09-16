import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'art-list-item',
  styleUrl: 'art-list-item.css',
})
export class ArtListItem {

  @Prop() location: string;
  @Prop() coordinates: string;
  @Prop() link: string;

  render() {
      return <div class="art">
          <h2> {this.location} </h2>
          <p> <a href={this.link}>{this.coordinates}</a></p>
      </div>;
  }   
}