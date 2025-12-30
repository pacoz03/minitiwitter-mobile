// data/dummy.ts
export interface TweetType {
  id: string;
  displayName: string;
  handle: string;
  time: string;
  content: string;
  comments: number;
  likes: number;
}

export const MOCK_TWEETS: TweetType[] = [
  {
    id: '1',
    displayName: 'Asha Rangappa',
    handle: '@asharangappa...',
    time: '1h',
    content: 'If the National Guard is really in D.C. to protect federal property, they should probably have been at 1600 Pennsylvania Ave. two days ago',
    comments: 78,
    likes: 4500, // visualizzeremo come 4.5K
  },
  {
    id: '2',
    displayName: 'zay',
    handle: '@indigof...',
    time: '15h',
    content: "I don't let myself be ashamed for reading fanfiction because what do you mean I get to be blessed by diverse array of extremely talented authors writing extended stories about my comfort characters and shows for free? Why would I be ashamed of that?",
    comments: 20,
    likes: 1000,
  },
  {
    id: '3',
    displayName: 'TechForward',
    handle: '@tech_fwd',
    time: '45m',
    content: 'Just demoed the new multi-modal AI from OmniCorp. It can generate coherent code, images, and music from a single prompt. This is going to change everything.',
    comments: 92,
    likes: 1200,
  }
];