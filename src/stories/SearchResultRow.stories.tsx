import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1

// eslint-disable-next-line import/no-extraneous-dependencies
import { Story, Meta } from '@storybook/react/types-6-0';

// eslint-disable-next-line import/namespace
import {
  SearchResultRow,
  SearchResultRowProps,
} from '../components/SearchResultRow';

export default {
  title: 'components/SearchResultRow',
  component: SearchResultRow,
} as Meta;

const Template: Story<SearchResultRowProps> = (args: SearchResultRowProps) => {
  return <SearchResultRow {...args} />;
};

export const Tracks = Template.bind({});
Tracks.args = {
  searchedItem: {
    tracks: {
      items: [
        {
          id: '18xszcbgtHszOpossumBPJ',
          name: 'スターフィッシュ',
          album: {
            id: '1nbpjfQPtVEeexILtqJxrq',
            name: 'Pepperoni Quattro',
            images: [
              {
                url:
                  'https://i.scdn.co/image/ab67616d0000b27340d32176aad45613520036ff',
              },
            ],
          },
          artists: [{ id: '3cbd5GWGOknxmFAe77MDbk', name: 'ELLEGARDEN' }],
        },
        {
          id: '51GoV9wH57anm60ll5u5bS',
          name: 'GOKU VIBES',
          album: {
            id: '4EKjwL06SUJy6RlBmxE17x',
            name: 'GOKU VIBES',
            images: [
              {
                url:
                  'https://i.scdn.co/image/ab67616d0000b273348ed3f89659ba5cace43baf',
              },
            ],
          },
          artists: [
            { id: '5vEZZrTMbKhrd5Mgs37m8p', name: 'DJ CHARI' },
            { id: '22CyfYzF7NMyITy8gKIYT5', name: 'DJ TATSUKI' },
          ],
        },
        {
          id: '0ui9eFDmG2V9vW794v8CEp',
          name: '風の日',
          album: {
            id: '1UnNvMfNPmPQlsedObGRIK',
            name: 'ELLEGARDEN BEST 1999-2008',
            images: [
              {
                url:
                  'https://i.scdn.co/image/ab67616d0000b273af8f14f5d594f89576b74b06',
              },
            ],
          },
          artists: [{ id: '"3cbd5GWGOknxmFAe77MDbk"', name: 'ELLEGARDEN' }],
        },
        {
          id: '4oQXYIYJ6Kxc89KrhoZTYq',
          name: 'Salamander',
          album: {
            id: '62h711GD0PJcK2HfqO7dmB',
            name: 'ELEVEN FIRE CRACKERS',
            images: [],
          },
          artists: [{ id: '"3cbd5GWGOknxmFAe77MDbk"', name: 'ELLEGARDEN' }],
        },
        {
          id: '4oQXYIYJ6Kxc89KrdhoZTYq',
          name: 'Salamander',
          album: {
            id: '62h711GD0PJcK2HfqO7dmB',
            name: 'ELEVEN FIRE CRACKERS',
            images: [],
          },
          artists: [{ id: '"3cbd5GWGOknxmFAe77MDbk"', name: 'ELLEGARDEN' }],
        },
        {
          id: '4oQXYIYJ6Kxwc89KrdhoZTYq',
          name: 'Salamander',
          album: {
            id: '62h711GD0PJcK2HfqO7dmB',
            name: 'ELEVEN FIRE CRACKERS',
            images: [],
          },
          artists: [{ id: '"3cbd5GWGOknxmFAe77MDbk"', name: 'ELLEGARDEN' }],
        },
      ],
    },
  },
};

export const Albums = Template.bind({});

Albums.args = {
  searchedItem: {
    albums: {
      items: [
        {
          id: '1UnNvMfNPmPQlsedObGRIK',
          name: 'ELLEGARDEN BEST 1999-2008',
          images: [
            {
              url:
                'https://i.scdn.co/image/ab67616d0000b273af8f14f5d594f89576b74b06',
            },
          ],
          artists: [{ id: '3cbd5GWGOknxmFAe77MDbk', name: 'ELLEGARDEN' }],
        },
        {
          id: '5xdGPiRQomp4Y8znRapeY5',
          name: "DON'T TRUST ANYONE BUT US",
          images: [
            {
              url:
                'https://i.scdn.co/image/ab67616d0000b2733019f2e399fd87b5f5f0ca6e',
            },
          ],
          artists: [{ id: '3cbd5GWGOknxmFAe77MDbk', name: 'ELLEGARDEN' }],
        },
        {
          id: '2aappDlY0YcqF9EhPHDKaD',
          name:
            'Schubert: Ellens Gesang III, Op. 52, No. 6, D. 839 "Ave Maria" (Musical Moments)',
          images: [
            {
              url:
                'https://i.scdn.co/image/ab67616d0000b2733e183793d167f66e05f3c8bd',
            },
          ],
          artists: [
            { id: '2p0UyoPfYfI76PCStuXfOP', name: 'フランツ・シューベルト' },
          ],
        },
        {
          id: '2ziQWuaXo2xwAdCoag8LaX',
          name: 'Elle',
          images: [],
          artists: [{ id: '7HFhi8w52p30roEfUmV7Mh', name: 'Boutot' }],
        },
        {
          id: '2ziQWuaXo2xwAdCoadg8LaX',
          name: 'Elle',
          images: [],
          artists: [{ id: '7HFhi8w52p30roEfUmV7Mh', name: 'Boutot' }],
        },
        {
          id: '2ziQWuaXo2xwwAdCoadg8LaX',
          name: 'Elle',
          images: [],
          artists: [{ id: '7HFhi8w52p30roEfUmV7Mh', name: 'Boutot' }],
        },
      ],
    },
  },
};

export const Artists = Template.bind({});
Artists.args = {
  searchedItem: {
    artists: {
      items: [
        {
          id: '3cbd5GWGOknxmFAe77MDbk',
          name: 'ELLEGARDEN',
          images: [
            {
              url:
                'https://i.scdn.co/image/b17a8dc9cd366392fbb11a3975b755fe094456a6',
            },
          ],
        },
        {
          id: '"0K4yOpgMzCzZmi8sxtUIVS"',
          name: 'Jo Ellen Pellman',
          images: [],
        },
        {
          id: '5N87utqQzCT8NHBW7JJXog',
          name: 'Ellen Andersson',
          images: [
            {
              url:
                'https://i.scdn.co/image/81ad675e00979dffdb53bcf47985143a07bbcc07',
            },
          ],
        },
        {
          id: '0gAd6Hy6KbkeWOop5aTMqQ',
          name: 'Tom Ellenhag',
          images: [
            {
              url:
                'https://i.scdn.co/image/d63b2198f38f1151d13f39c1f63c3cb60ff177bb',
            },
          ],
        },
        {
          id: '0gAd6Hy6KbkeWwOop5aTMqsQ',
          name: 'Tom Ellenhag',
          images: [
            {
              url:
                'https://i.scdn.co/image/d63b2198f38f1151d13f39c1f63c3cb60ff177bb',
            },
          ],
        },
        {
          id: '0gAd6Hy6KbkeWwOop5aTMqssQ',
          name: 'Tom Ellenhag',
          images: [
            {
              url:
                'https://i.scdn.co/image/d63b2198f38f1151d13f39c1f63c3cb60ff177bb',
            },
          ],
        },
      ],
    },
  },
};
