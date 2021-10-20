import { Component, State, h } from '@stencil/core';
import { Art, catalogue } from '../../utils/art';

@Component({
  tag: 'art-list',
  styleUrl: 'art-list.css',
})
export class ArtList {

  @State() artList: Array<Art>;

  componentWillLoad() {
    this.artList = catalogue;
  }

  render() {
    return <ul class="artList container">
      {this.artList.map((art: Art) => {
        return <li>
          <art-list-item
            location={art.location}
            coordinates={art.coordinates}
            link={art.link}>
          </art-list-item>
        </li>;
      })}
    </ul>
  }
}