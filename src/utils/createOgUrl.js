import metadata from '../../metadata';

export default slug =>
    slug == null ? null : `${metadata.siteUrl}/${slug.replace(/^\//, '')}`;
