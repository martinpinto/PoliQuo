import Model from './Model';
import User from './User';

export default class Comment extends Model {
    public id: number;

    public title: string;
    public content: string;
    public dateCreated: string;
    public user: User;
    public userId: number;

    constructor(comment?: Comment) {
        super();
        this._type = "Comment";

        if (comment) {
            this.id = comment.id || -1;
            this.title = comment.title || "";
            this.content = comment.content || "";
            this.dateCreated = comment.dateCreated || "";
            this.userId = comment.userId || -1;
        }
    }
}