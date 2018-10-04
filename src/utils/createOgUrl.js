import metadata from '../../metadata';

export default slug =>
    slug == null ? null : `${metadata.websiteUrl}/${slug.replace(/^\//, '')}`;
