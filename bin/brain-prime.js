#!/usr/bin/env node

import greeting from '../src/cli.js';
import gameProperties from '../src/index.js';
import {
  announcement, rounds, gameData,
} from '../src/games/game-prime.js';

gameProperties(announcement, greeting, rounds, gameData);
