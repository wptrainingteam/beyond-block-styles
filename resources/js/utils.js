// Internal dependencies.
import { ICONS } from './const';

// WordPress dependencies.
import TokenList from '@wordpress/token-list';

export const getIconFromClassName = ( className ) => {
	const list = new TokenList( className );

	const style = ICONS.find( ( option ) =>
		list.contains( `is-style-icon-${ option.value }` )
	);

	return undefined !== style ? style.value : '';
};

export const updateIconClass = ( className, newIcon = '', oldIcon = '' ) => {
	const list = new TokenList( className );

	if ( oldIcon ) {
		list.remove( `is-style-icon-${ oldIcon }` );
	}

	if ( newIcon ) {
		list.add( `is-style-icon-${ newIcon }` );
	}

	return list.value;
};
