import { service } from '@ember-decorators/service';
import Route from '@ember/routing/route';
import { DS } from 'ember-data';
import Theme from 'ember-osf-web/services/theme';

export default class ProviderDiscover extends Route {
    controllerName = 'discover';
    templateName = 'discover';

    @service store!: DS.Store;
    @service theme!: Theme;

    model() {
        return [];
    }
}
