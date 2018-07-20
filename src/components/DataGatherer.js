import React from 'react';

import Hero from './Hero';

function getHeroName(slug: string): string {
  return slug;
}

export default function DataGatherer({ clip }) {
  return <Hero hero="Mei" />;
}

const heroes = [
  {
    name: 'D.Va',
    slug: 'dva'
  },
  {
    name: 'Orisa',
    slug: 'orisa'
  },
  {
    name: 'Reinhardt',
    slug: 'reinhardt'
  },
  {
    name: 'Roadhog',
    slug: 'roadhog'
  },
  {
    name: 'Winston',
    slug: 'winston'
  },
  {
    name: 'Zarya',
    slug: 'zarya'
  },
  {
    name: 'Bastion',
    slug: 'bastion'
  },
  {
    name: 'Doomfist',
    slug: 'doomfist'
  },
  {
    name: 'Genji',
    slug: 'genji'
  },
  {
    name: 'Hanzo',
    slug: 'hanzo'
  },
  {
    name: 'Junkrat',
    slug: 'junkrat'
  },
  {
    name: 'McCree',
    slug: 'mccree'
  },
  {
    name: 'Mei',
    slug: 'mei'
  },
  {
    name: 'Pharah',
    slug: 'pharah'
  },
  {
    name: 'Reaper',
    slug: 'reaper'
  },
  {
    name: 'Solder: 76',
    slug: 'soldier-76'
  },
  {
    name: 'Sombra',
    slug: 'sombra'
  },
  {
    name: 'Symmetra',
    slug: 'symmetra'
  },
  {
    name: 'Torbjorn',
    slug: 'torbjorn'
  },
  {
    name: 'Tracer',
    slug: 'tracer'
  },
  {
    name: 'Widowmaker',
    slug: 'widowmaker'
  },
  {
    name: 'Ana',
    slug: 'ana'
  },
  {
    name: 'Brigitte',
    slug: 'brigitte'
  },
  {
    name: 'Lucio',
    slug: 'lucio'
  },
  {
    name: 'Mercy',
    slug: 'mercy'
  },
  {
    name: 'Moira',
    slug: 'moira'
  },
  {
    name: 'Zenyatta',
    slug: 'zenyatta'
  }
];
