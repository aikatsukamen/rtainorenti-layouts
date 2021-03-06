import {Checklist} from './generated/checklist';
import {CurrentRun} from './generated/current-run';
import {NextRun} from './generated/next-run';
import {Schedule} from './generated/schedule';
import {Timer} from './generated/timer';
import {Spreadsheet} from './generated/spreadsheet';
import {Twitch} from './generated/twitch';
import {Challonge, TournamentCurrent} from './generated/challonge';

type Run = NonNullable<CurrentRun>;
type Participant = Run['runners'][number];

type ReplicantMap = {
	checklist: Checklist;
	'current-run': CurrentRun;
	'next-run': NextRun;
	schedule: Schedule;
	spreadsheet: Spreadsheet;
	timer: Timer;
	twitch: Twitch;
	challonge: Challonge;
	tournamentCurrent: TournamentCurrent;
};

export {
	ReplicantMap,
	Checklist,
	CurrentRun,
	NextRun,
	Schedule,
	Timer,
	Spreadsheet,
	Twitch,
	Run,
	Participant,
	Challonge,
	TournamentCurrent,
};
