import { Component, Prop, h } from '@stencil/core';


@Component({
  tag: 'art-list-item',
  styleUrl: 'art-list-item.css',
})
export class ArtListItem {

  @Prop() img: string;
  @Prop() location: string;
  @Prop() coordinates: Array<number>;
  @Prop() link: string;
  @Prop() city: string;
  @Prop() postalcode: string;
  @Prop() country: string;
  
  render() {
    return <div class="container clearfix art">            
      <a href={"./data/img/" + this.img} target="_blank">
        <img class="main-img float-end" src={"./data/img/" + this.img}></img>
      </a>
      <h2 class="location">{this.location}</h2>
      <div class="address">
        {this.city} ({this.postalcode}), {this.country}
      </div>
      <div class="coordinates">
        <a href={this.link}  target="_blank">[ {this.coordinates[0]}, {this.coordinates[1]}]</a>
      </div>
    </div>;
}
}