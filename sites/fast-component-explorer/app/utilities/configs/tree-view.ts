import {
    TreeView,
    treeViewItemSchema,
    TreeViewProps,
    treeViewSchema,
} from "@microsoft/fast-components-react-msft";
import { uniqueId } from "lodash-es";
import Guidance from "../../.tmp/tree-view/guidance";
import { glyphSchema, Icon } from "../../../app/components/glyph";
import { ComponentViewConfig } from "./data.props";

const treeViewConfig: ComponentViewConfig<TreeViewProps> = {
    schema: treeViewSchema,
    component: TreeView,
    guidance: Guidance,
    scenarios: [
        {
            displayName: "Basic",
            data: {
                children: [
                    {
                        id: treeViewItemSchema.id,
                        props: {
                            key: uniqueId(),
                            titleContent: "Favorites",
                            beforeContent: {
                                id: glyphSchema.id,
                                props: {
                                    path: Icon.folder,
                                },
                            } as any,
                            children: [
                                {
                                    id: treeViewItemSchema.id,
                                    props: {
                                        key: uniqueId(),
                                        titleContent: "Work",
                                        beforeContent: {
                                            id: glyphSchema.id,
                                            props: {
                                                path: Icon.favorite,
                                            },
                                        } as any,
                                    },
                                },
                                {
                                    id: treeViewItemSchema.id,
                                    props: {
                                        key: uniqueId(),
                                        titleContent: "Shopping",
                                        selected: true,
                                        beforeContent: {
                                            id: glyphSchema.id,
                                            props: {
                                                path: Icon.folder,
                                            },
                                        } as any,
                                        children: [
                                            {
                                                id: treeViewItemSchema.id,
                                                props: {
                                                    key: uniqueId(),
                                                    titleContent: "Dinner Meals",
                                                    beforeContent: {
                                                        id: glyphSchema.id,
                                                        props: {
                                                            path: Icon.favorite,
                                                        },
                                                    },
                                                },
                                            },
                                        ],
                                    },
                                },
                                {
                                    id: treeViewItemSchema.id,
                                    props: {
                                        key: uniqueId(),
                                        titleContent: "Inspiration",
                                        beforeContent: {
                                            id: glyphSchema.id,
                                            props: {
                                                path: Icon.favorite,
                                            },
                                        } as any,
                                    },
                                },
                            ],
                        },
                    },
                ],
            },
        },
    ],
};

export default treeViewConfig;
