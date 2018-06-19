import Model from './Model';
import Party from './Party';

export default class Politician extends Model {
    public id: number;

    public firstname: string;
    public lastname: string;
    public role: string;
    public avatar: string;
    public votes: number;
    public party: Party;
    public partyId: number;

    constructor(politician?: Politician) {
        super();
        this._type = "Politician";

        if (politician) {
            this.firstname = politician.firstname || "";
            this.lastname = politician.lastname || "";
            this.role = politician.role || "";
            this.avatar = politician.avatar || "";
            this.votes = politician.votes || 0;
            this.partyId = politician.partyId || 0;
        }
    }
}