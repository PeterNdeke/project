import Vue from "vue";

import Vuex from "vuex";
Vue.use(Vuex);
export const store = new Vuex.Store({
    state: {
        posts: [],
        nots: [],
        experiences: [],
        education: [],
        skills: [],
        auth_user: {},
        pending: []
    },
    getters: {
        all_nots(state) {
            return state.nots;
        },

        all_nots_count(state) {
            return state.nots.length;
        },
        all_posts(state) {
            return state.posts;
        },
        all_experiences(state) {
            return state.experiences;
        },
        all_education(state) {
            return state.education;
        },
        all_skills(state) {
            return state.skills;
        },
        get_all_pending(state) {
            return state.pending;
        }
    },
    mutations: {
        add_not(state, not) {
            state.nots.push(not);
        },
        pushPost(state, payLoad) {
            state.posts.unshift(payLoad);
        },

        addExperience(state, payLoad) {
            state.experiences.unshift(payLoad);
        },
        addSkill(state, payLoad) {
            state.skills.unshift(payLoad);
        },

        removeSkill(state, payload) {
            var skill = state.skills.find(s => {
                return s.id === payload.id;
            });
            var index = state.skills.indexOf(skill);

            state.skills.splice(index, 1);
        },

        updateExperience(state, payload) {
            state.experiences = state.experiences.map(experience => {
                if (experience.id === payload.id) {
                    return Object.assign({}, experience, payload.data);
                }
                return experience;
            });
        },
        addEducation(state, payLoad) {
            state.education.unshift(payLoad);
        },
        updateEducation(state, payload) {
            state.education = state.education.map(edu => {
                if (edu.id === payload.id) {
                    return Object.assign({}, edu, payload.data);
                }
                return edu;
            });
        },

        updatePost(state, payload) {
            state.posts = state.posts.map(post => {
                if (post.id === payload.id) {
                    return Object.assign({}, post, payload.data);
                }
                return post;
            });
        },
        updateComments(state, payLoad) {
            let post = state.posts.find(post => {
                return payLoad.post_id === post.id;
            });
            post.comments = payLoad["comments"];
        },
        deletePost(state, payload) {
            var post = state.posts.find(p => {
                return p.id === payload.id;
            });
            var index = state.posts.indexOf(post);

            state.posts.splice(index, 1);
        },
        update_post_likes(state, payload) {
            var post = state.posts.find(p => {
                return p.id === payload.id;
            });

            post.like.push(payload.like);
        },
        unlike_post(state, payload) {
            var post = state.posts.find(p => {
                return p.id === payload.post_id;
            });

            var like = post.like.find(l => {
                return l.id === payload.like_id;
            });

            var index = post.like.indexOf(like);

            post.like.splice(index, 1);
        },
        authUser(state, user) {
            state.auth_user = user;
        },
        add_pending(state, pend) {
            state.pending.push(pend);
        }
    }
});
