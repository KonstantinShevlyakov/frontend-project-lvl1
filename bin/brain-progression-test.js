#!/usr/bin/env node
import { greeting } from '../src/cli.js';
import { gameProperties } from '../src/index-test.js';
import { announcement, questions, correctResults } from '../src/games/game-progression-test.js';

gameProperties(announcement, questions, correctResults, greeting);