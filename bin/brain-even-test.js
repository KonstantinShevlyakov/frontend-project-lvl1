#!/usr/bin/env node

import { greeting, userName } from '../src/cli.js';
import gameProperties from '../src/index-test.js';
import { announcement, questions, correctResults } from '../src/games/game-even-test.js';

greeting();
gameProperties(announcement, questions, correctResults, userName);
