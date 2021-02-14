import { DiscordBot } from 'diskord-bot';

interface PercevalConfig {
    token: string;
    owners?: string | string[];
}

export default class Perceval extends DiscordBot {



    public constructor(config: PercevalConfig) {
        super();
        this.config = config
    }
}