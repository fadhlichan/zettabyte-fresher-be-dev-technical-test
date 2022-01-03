const result = sessions => {
    const { session_ids, session_times } = getSessionIdsAndTime(sessions)

    return session_ids.map(session_id => {
        return {
            session_id: session_id,
            time: session_times[session_id],
            classes: getClassesBySessionId(sessions, session_id)
        }
    })
}

const getSessionIdsAndTime = sessions => {
    const session_ids = []
    const session_times = {}

    sessions.forEach(({ session_id, time }) => {
        if (!session_ids.includes(session_id)) {
            session_ids.push(session_id)
            session_times[session_id] = time
        }
    })

    return { session_ids, session_times }
}

const getClassesBySessionId = (sessions, session_id) => {
    const class_ids = []
    const class_names = {}

    sessions.forEach(session => {
        if (session.session_id === session_id) {
            const class_id = session.class.class_id
            const class_name = session.class.name
            if (!class_ids.includes(class_id)) {
                class_ids.push(class_id)
                class_names[class_id] = class_name
            }
        }
    })

    return class_ids.map(class_id => {
        return {
            class_id,
            name: class_names[class_id],
            students: getStudentsByClassId(sessions, class_id)
        }
    })
}

const getStudentsByClassId = (sessions, class_id) => {
    const students = []

    sessions.forEach(session => {
        if (session.class.class_id === class_id) {
            students.push(session.student)
        }
    })

    return students.sort((a, b) => a.name < b.name)
}

module.exports = result