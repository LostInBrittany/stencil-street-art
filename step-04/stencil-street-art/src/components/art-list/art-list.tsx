import { Component, State, h } from '@stencil/core';
import { Art } from '../../utils/art';

@Component({
  tag: 'art-list',
  styleUrl: 'art-list.css',
})
export class ArtList {

  @State() artList: Array<Art>;

  async componentWillLoad() {
    try {
        const response = await fetch('/data/street-art.json');
        this.artList = await response.json();
    }
    catch (err) {
        console.log('fetch failed', err);
    }
  }

  render() {
    return <ul class="artList container">
      {this.artList.map((art: Art) => {
        return <li>
          <art-list-item
            img={art.img}
            location={art.location}
            coordinates={art.coordinates}
            link={art.link}
            city={art.city}
            postalcode={art.postalcode}
            country={art.country}>
          </art-list-item>
        </li>;
      })}
    </ul>
  }
}